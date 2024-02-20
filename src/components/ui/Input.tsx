"use client";

import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import classNames from "classnames";

type InputComponentProps = {
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const InputComponent = (
  { className, error, disabled, ...props }: InputComponentProps,
  ref: LegacyRef<HTMLInputElement>
) => (
  <>
    <Tooltip variant="error" id={`${props.value}-tooltip`} />
    <input
      ref={ref}
      data-tooltip-id={`${props.value}-tooltip`}
      data-tooltip-content={error?.message}
      data-tooltip-place="bottom"
      className={classNames(
        "p-2 border border-gray-300 bg-gray-100 block w-full my-4 rounded-xl",
        {
          "border-red-700": error,
        },
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className
      )}
      {...props}
    />
  </>
);

export const Input = forwardRef(InputComponent);
