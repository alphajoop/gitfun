import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-prLight bg-bgWhite px-3 py-2 text-base ring-offset-bgWhite file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-prDark placeholder:text-prGrey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-prGrey focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-prDark dark:bg-bgBlack dark:ring-offset-prDark dark:file:text-prLight dark:placeholder:text-prGrey dark:focus-visible:ring-prDark md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
