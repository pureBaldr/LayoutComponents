import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";

interface Props {
  spacing?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
}
export const VStack: React.FC<Props> = ({
  className = "",
  spacing = "md",
  paddingY = "",
  paddingX = "",
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
