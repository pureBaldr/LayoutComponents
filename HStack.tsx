import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";
import { ReactNode } from "react";

type Props = {
  spacing?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
  mobile?: boolean;
  children: ReactNode;
}
export const HStack: React.FC<Props> = ({
  className = "",
  spacing = "md",
  mobile = false,
  children,
  paddingX = "",
  paddingY = "",
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
