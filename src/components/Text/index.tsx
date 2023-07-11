import React from "react";

const sizeClasses = {
  txtArialBoldMT16: "font-arial font-bold",
  txtArialBoldMT18: "font-arial font-bold",
  txtArialMT12Bluegray90001: "font-arial font-normal",
  txtArialBoldMT12: "font-arial font-bold",
  txtArialBoldMT14: "font-arial font-bold",
  txtInterRegular20: "font-inter font-normal",
  txtArialBoldMT15: "font-arial font-bold",
  txtArialBoldMT16Black900: "font-arial font-bold",
  txtOutfitRegular1878: "font-normal font-outfit",
  txtArialMT12: "font-arial font-normal",
  txtInterBold64: "font-bold font-inter",
  txtArialMT15: "font-arial font-normal",
  txtArialMT16: "font-arial font-normal",
  txtArialMT13: "font-arial font-normal",
  txtArialBoldMT20: "font-arial font-bold",
  txtArialBoldMT44: "font-arial font-bold",
  txtInterBold175: "font-bold font-inter",
  txtInterRegular30: "font-inter font-normal",
  txtArialBoldMT25: "font-arial font-bold",
  txtArialBoldMT26: "font-arial font-bold",
  txtArialBoldMT48: "font-arial font-bold",
  txtArialBoldMT214: "font-arial font-bold",
  txtVerdana16: "font-normal font-verdana",
  txtInterRegular19: "font-inter font-normal",
  txtArialBoldMT152: "font-arial font-bold",
  txtArialMT20: "font-arial font-normal",
  txtInterRegular175: "font-inter font-normal",
  txtArialBoldMT10: "font-arial font-bold",
  txtInterRegular13: "font-inter font-normal",
  txtArialBoldMT1872: "font-arial font-bold",
  txtArialBoldMT20Gray500f4: "font-arial font-bold",
  txtArialMT15Gray600: "font-arial font-normal",
  txtInterBold165: "font-bold font-inter",
  txtArialMT16Gray800: "font-arial font-normal",
  txtArialMT15Gray800: "font-arial font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
