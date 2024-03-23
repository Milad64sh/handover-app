import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './filterSelect.module.scss';
// import { STAFFOPTIONS, SERVICEOPTIONS } from './Filters';

const FilterSelect = (props) => {
  const { label, multiple, value, onChange, options, onFilterChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef();
  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = useCallback(
    (option) => {
      if (multiple) {
        if (value.includes(option)) {
          onChange(value.filter((o) => o !== option));
        } else {
          onChange([...value, option]);
        }
      } else {
        if (option !== value) onChange(option);
      }
      onFilterChange(label, value);
    },
    [multiple, value, onChange, label, onFilterChange]
  );

  const isOptionSelected = (option) => {
    return multiple ? value.includes(option) : option === value;
  };

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          {
            if (!isOpen) {
              setIsOpen(true);
              break;
            }
            const newValue =
              highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
            if (newValue >= 0 && newValue < options.length) {
              setHighlightedIndex(newValue);
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
        default:
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightedIndex, options, selectOption]);

  return (
    <>
      <div
        ref={containerRef}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.container__value}>
          {multiple
            ? value.map((v) => (
                <button
                  className={styles['container__value__option-badge']}
                  key={v.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectOption(v);
                  }}
                >
                  {v.label}{' '}
                  <span className={styles['container__value__remove-btn']}>
                    &times;
                  </span>
                </button>
              ))
            : value
            ? value.label
            : ''}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles['container__clear-btn']}
        >
          &times;
        </button>
        <div className={styles.container__divider}></div>
        <div className={styles.container__caret}></div>
        <ul
          className={`${styles.container__options} ${
            isOpen ? styles.show : ''
          }`}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`${styles.container__options__option} ${
                isOptionSelected(option) ? styles.selected : ''
              }${index === highlightedIndex ? styles.highlighted : ''} `}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterSelect;
