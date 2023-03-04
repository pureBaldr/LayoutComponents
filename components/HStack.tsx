import { ReactNode } from "react";
import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";
import { DimentionsType } from "@dadmor/pure-baldr-core";

type Props = {
  spacing?: DimentionsType;
  paddingY?: DimentionsType;
  paddingX?: DimentionsType;
  mobile?: boolean;
  className?: string;
  children: ReactNode;
}
export const HStack: React.FC<Props> = ({
  spacing = "md",
  children,
  paddingX = null,
  paddingY = null,
  mobile = false,
  className = "",
}) => {
  return (
    <div
      className={mixClass({
        flex: true,
        "flex-col md:flex-row": mobile,
        [className]: true,
        ...paddingxMix(paddingX),
        ...paddingyMix(paddingY),
        ...gapMix(spacing),
      })}
    >
      {children}
    </div>
  );
};
export default HStack;
