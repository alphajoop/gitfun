import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'focus-visible:ring-prDark dark:ring-offset-prDark inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-bgWhite transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-prLight [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-bgBlack hover:bg-prDark dark:text-prDark text-prLight dark:bg-bgWhite dark:hover:bg-prLight',
        destructive:
          'bg-red-500 text-prLight hover:bg-red-500/90 dark:bg-red-900 dark:text-prLight dark:hover:bg-red-900/90',
        outline:
          'hover:text-prDark dark:border-prDark dark:bg-bgBlack dark:hover:bg-prDark border border-prLight bg-bgWhite hover:bg-prLight dark:hover:text-prLight',
        secondary:
          'text-prDark dark:bg-bgBlack dark:hover:bg-prDark bg-bgWhite hover:bg-prLight dark:text-prLight',
        ghost:
          'hover:text-prDark dark:hover:bg-bgBlack hover:bg-bgWhite dark:hover:text-prLight',
        link: 'text-prDark underline-offset-4 hover:underline dark:text-prLight',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
