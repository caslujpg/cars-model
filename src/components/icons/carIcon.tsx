import Svg, { Path } from "react-native-svg";
import { IconProps } from "./iconProps";

export function CarIcon({ size = 24, color = "#fff" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path
        fill={color}
        d="M240 104h-10.8l-27.78-62.5A16 16 0 00186.8 32H69.2a16 16 0 00-14.62 9.5L26.8 104H16a8 8 0 000 16h8v80a16 16 0 0016 16h24a16 16 0 0016-16v-16h96v16a16 16 0 0016 16h24a16 16 0 0016-16v-80h8a8 8 0 000-16zM69.2 48h117.6l24.89 56H44.31zM216 200h-24v-24a8 8 0 00-8-8H72a8 8 0 00-8 8v24H40v-80h176z"
      />
    </Svg>
  );
}
