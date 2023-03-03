import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";
import { ReactNode } from "react";
import { DimentionsType } from "@dadmor/pure-baldr-core";

type Props = {
  spacing?: DimentionsType;
  paddingY?: DimentionsType;
  paddingX?: DimentionsType;
  children: ReactNode;
  className?: string;
}
export const VStack: React.FC<Props> = ({
  spacing = "md",
  paddingY = null,
  paddingX = null,
  className = "",
  children,
}) => {
  return (
    <div
      className={mixClass({
        "flex flex-col": true,
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
export default VStack;
