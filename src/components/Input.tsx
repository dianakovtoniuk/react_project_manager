import { forwardRef, type ComponentPropsWithoutRef, type ForwardedRef } from 'react';

type InputProps = { label: string } & (
  | ({ textarea?: false } & ComponentPropsWithoutRef<'input'>)
  | ({ textarea: true } & ComponentPropsWithoutRef<'textarea'>)
);

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  function Input({ label, textarea, ...props }, ref) {
    const classes =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            className={classes}
            {...(props as ComponentPropsWithoutRef<'textarea'>)}
          />
        ) : (
          <input
            ref={ref as ForwardedRef<HTMLInputElement>}
            className={classes}
            {...(props as ComponentPropsWithoutRef<'input'>)}
          />
        )}
      </p>
    );
  }
);

export default Input;