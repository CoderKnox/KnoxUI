const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  s: 'px-3 py-1.5 text-sm',
  m: 'px-4 py-2 text-base',
  l: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl',
};

const colorClasses = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
  success: 'bg-success-500 hover:bg-success-600 text-white',
  warning: 'bg-warning-500 hover:bg-warning-600 text-white',
  error: 'bg-error-500 hover:bg-error-600 text-white',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-800 dark:text-gray-100 dark:hover:bg-gray-800/50',
};

const clickEffects = {
  ripple: 'overflow-hidden relative',
  push: 'transform active:scale-90 transition-transform',
  none: '',
};

const Button = ({
  children,
  size = 'm',
  color = 'primary',
  clickEffect = 'ripple',
  isLoading = false,
  className = '',
  ...props
}) => {
  var baseClasses = 'font-semibold rounded-md transition-colors duration-400 h-min select-none';
  const sizeClass = sizeClasses[size] || sizeClasses.m;
  const colorClass = colorClasses[color] || colorClasses.primary;
  const effectClass = clickEffects[clickEffect] || clickEffects.ripple;

  if (isLoading) {
    baseClasses = `${baseClasses} opacity-75 cursor-progress`;
  }

  const handleClick = (event) => {
    if (clickEffect === 'ripple' && !isLoading) {
      const button = event.currentTarget;
      const ripple = button.querySelector('.new-ripple');
      
      // Calculate position
      const rect = button.getBoundingClientRect();
      const left = event.clientX - rect.left;
      const top = event.clientY - rect.top;
      const circleSize = Math.max(rect.width, rect.height);
      
      // Set position and add ripple effect
      ripple.style.left = `${left-(circleSize/4)}px`;
      ripple.style.top = `${top-(circleSize/4)}px`;
      ripple.style.width = `${circleSize/2}px`;
      ripple.style.height = `${circleSize/2}px`;
      ripple.classList.add('button-ripple');

      // Remove ripple effect after animation
      setTimeout(() => {
        ripple.classList.remove('button-ripple');
      }, 800);
    }

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button
      className={`${baseClasses} ${sizeClass} ${colorClass} ${effectClass} ${className}`}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {clickEffect === 'ripple' && <span className="new-ripple absolute"></span>}
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

