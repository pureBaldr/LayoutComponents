import { ReactNode } from "react";
import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";
import { DimentionsType } from "@dadmor/pure-baldr-core"

type Props = {
  spacing?: DimentionsType; 
  paddingY?: DimentionsType;
  paddingX?: DimentionsType;
  className?: string;
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
