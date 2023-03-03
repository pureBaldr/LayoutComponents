import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";
import { ReactNode } from "react";
import { Dimentions } from "@dadmor/pure-baldr-core"



type Props = {
  spacing?: Dimentions; 
  className?: string;
  paddingY?: string;
  paddingX?: string;
  children: ReactNode;
};

export const Block: React.FC<Props> = ({
  className = "",
  spacing = "md",
  paddingY = "md",
  paddingX = "md",
  children,
}) => {
  return (
    <div
      className={mixClass({
        grid: true,
        [className]: true,
        ...gapMix(spacing),
        ...paddingyMix(paddingY),
        ...paddingxMix(paddingX),
      })}
    >
      {children}
    </div>
  );
};
export default Block;
