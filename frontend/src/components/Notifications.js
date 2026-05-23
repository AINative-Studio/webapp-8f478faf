import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Notifications Component
 * Feature: notifications
 * Refactored for better performance and maintainability
 */
const Notifications = ({ initialState = null, onAction = null }) => {
  const [state, setState] = useState(initialState);

  const handleClick = useCallback(() => {
    setState('active');
    onAction?.('clicked');
  }, [onAction]);

  return (
    <div
      data-testid="notifications-container"
      className="notifications-component"
      aria-label="Notifications"
    >
      <h2>Notifications</h2>
      <button
        onClick={handleClick}
        role="button"
        aria-pressed={state === 'active'}
      >
        Action
      </button>
    </div>
  );
};

Notifications.propTypes = {
  initialState: PropTypes.string,
  onAction: PropTypes.func,
};

export default React.memo(Notifications);
