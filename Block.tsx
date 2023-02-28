import { mixClass, gapMix, paddingyMix, paddingxMix  } from "@dadmor/pure-baldr-core";

interface Props {
  spacing?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
}
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
