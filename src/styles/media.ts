type DeviceType = "xLarge" | "large" | "medium" | "small" ;

const size: Record<DeviceType, number> = {
  xLarge: 1200,
  large: 990,
  medium: 768,
  small: 574,
};


 export const media: Record<DeviceType, string> = {
  xLarge: `(max-width: ${size.xLarge}px)`,
  large: `(max-width: ${size.large}px)`,
  medium: `(max-width: ${size.medium}px)`,
  small: `(max-width: ${size.small}px)`,
}
