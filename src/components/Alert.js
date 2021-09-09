import React from 'react';

export const Alert = ({alert}) => {
  if (!alert) {
    return null
  }

  return (
    <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Attention!</strong> 
      {alert.text}
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
  )
}