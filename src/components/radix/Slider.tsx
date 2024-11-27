import { Slider as RadixSlider, SliderProps } from "@radix-ui/themes";

export const Slider = ({
  defaultValue = [10],
  steps,
  ...props
}: SliderProps & {
  steps?: SliderProps["minStepsBetweenThumbs"];
}) => {
  return (
    <RadixSlider
      defaultValue={defaultValue}
      highContrast
      minStepsBetweenThumbs={steps}
      {...props}
    />
  );
};
