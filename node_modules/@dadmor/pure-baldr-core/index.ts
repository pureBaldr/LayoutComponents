/* 
  editable conditions 
*/
export const gapMix = (value: string) => {
    return {
      "": value === "none",
      "gap-1": value === "xs",
      "gap-2": value === "sm",
      "gap-4": value === "md",
      "gap-6": value === "lg",
      "gap-9": value === "xl",
    };
  };
  
  export const paddingxMix = (value: string) => {
    return {
      "": value === "none",
      "px-2": value === "sm",
      "px-4": value === "md",
      "px-6": value === "lg",
      "px-9": value === "xl",
      "px-12": value === "2xl",
    };
  };
  
  export const paddingyMix = (value: string) => {
    return {
      "": value === "none",
      "py-2": value === "sm",
      "py-4": value === "md",
      "py-6": value === "lg",
      "py-9": value === "xl",
      "py-14": value === "2xl",
    };
  };
  
  export const paddingbMix = (value: string) => {
    return {
      "": value === "none",
      "pb-2": value === "sm",
      "pb-4": value === "md", 
      "pb-6": value === "lg",
      "pb-9": value === "xl",
      "pb-12": value === "2xl",
    };
  };
  
  /* coreersponding with tailwind config */
  
  export const textSizeMix = (value: string) => {
    return {
      "text-xs": value === "xs",
      "text-sm": value === "sm",
      "text-base": value === "base",
      "text-md": value === "md",
      "text-lg": value === "lg",
      "text-xl": value === "xl",
      "text-2xl": value === "2xl",
      "text-4xl": value === "3xl",
    };
  };
  
  export const textWeightMix = (value: string) => {
    return {
      "font-normal": value === "normal",
      "font-bold": value === "bold",
      "font-bold uppercase": value === "upbold",
    };
  };
  
  export const textColorMix = (value: string, active?: boolean) => {
    return {
      "text-primary-500": value === "primary",
      "text-secondary-900": value === "secondary",
      "text-tertiary-600": value === "tertiary",
      "text-red-600": value === "error",
      "text-green-700": value === "success",
      "text-green-100": value === "success-light",
      "text-amber-600": value === "warning",
      "text-amber-100": value === "warning-light",
      "text-blue-500": value === "info",
      "text-white": value === "white",
    };
  };
  
  export const borderColorMix = (value: string, active?: boolean) => {
    return {
      "border-primary-500": value === "primary",
      "border-secondary-900": value === "secondary",
      "border-tertiary-600": value === "tertiary",
      "border-red-600": value === "error",
      "border-green-700": value === "success",
      "border-green-100": value === "success-light",
      "border-amber-600": value === "warning",
      "border-amber-100": value === "warning-light",
      "border-blue-500": value === "info",
      "border-white": value === "white",
    };
  };
  
  export const textHoverColorMix = (value: string) => {
    return {
      "hover:text-primary-500 active:text-primary-700": value === "primary",
      "hover:text-secondary-600 active:text-secondary-700": value === "secondary",
      "hover:text-tertiary-600 active:text-tertiary-700": value === "tertiary",
      "hover:text-blue-400 active:text-blue-500": value === "light",
      "hover:text-blue-500 active:text-blue-600": value === "dark",
      "hover:text-red-700 active:text-red-800": value === "error",
      "hover:text-green-400 active:text-green-500": value === "success",
    };
  };
  
  export const bgMix = (value: string) => {
    return {
      "bg-primary-500": value === "primary",
      "bg-primary-50": value === "primary-light",
      "bg-secondary-900": value === "secondary",
      "bg-secondary-100": value === "secondary-light",
      "bg-tertiary-600": value === "tertiary",
      "bg-tertiary-100": value === "tertiary-light",
      "bg-red-700": value === "error",
      "bg-red-300 bg-opacity-20": value === "error-light",
      "bg-green-700": value === "success",
      "bg-green-300 bg-opacity-20": value === "success-light",
      "bg-yellow-400": value === "warning",
      "bg-yellow-50": value === "warning-light",
      "bg-blue-700": value === "info",
      "bg-blue-300 bg-opacity-20": value === "info-light",
      "bg-white": value === "white",
      "bg-carbon-50": value === "gray-light",
      "bg-carbon-300": value === "gray",
    };
  };
  
  export const bgHoverColorMix = (value: string) => {
    return {
      "hover:bg-primary-600 active:bg-primary-700": value === "primary",
      "hover:bg-opacity-80 active:bg-secondary-700": value === "secondary",
      "hover:bg-tertiary-700 active:bg-tertiary-700": value === "tertiary",
      "hover:bg-red-800 active:bg-red-800": value === "error",
      "hover:bg-green-500 active:bg-green-500": value === "success",
      "hover:bg-carbon-200": value === "gray-light",
      "hover:bg-carbon-400": value === "gray",
    };
  };
  
  export const roundedMix = (value: string) => {
    return {
      rounded: value === "md",
      "rounded-lg": value === "lg",
      "rounded-2xl": value === "2xl",
      "rounded-full": value === "full",
    };
  };
  
  export const shadowMix = (value: string) => {
    return {
      shadow: value === "md",
      "shadow-lg": value === "lg",
      "shadow-full": value === "full",
    };
  };
  
  export const transition = () => {
    return {
      "transition duration-150 ease-in-out": true,
    };
  };
  
  /* 
    methods
  */
  export const mixClass = (conditionsObject: any) => {
    let out = "";
    Object.keys(conditionsObject).map((k: string) =>
      conditionsObject[k] ? (out = out + " " + k) : null
    );
    return out;
  };
  