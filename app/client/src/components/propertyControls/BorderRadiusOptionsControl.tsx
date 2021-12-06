import * as React from "react";
import { tw } from "twind";

import BaseControl, { ControlProps } from "./BaseControl";
import TooltipComponent from "components/ads/Tooltip";

const options: { [key: string]: string } = {
  none: "0px",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

export interface BorderRadiusOptionsControlProps extends ControlProps {
  propertyValue: string | undefined;
}

class BorderRadiusOptionsControl extends BaseControl<
  BorderRadiusOptionsControlProps
> {
  constructor(props: BorderRadiusOptionsControlProps) {
    super(props);
  }

  static getControlType() {
    return "BORDER_RADIUS_OPTIONS";
  }

  public render() {
    const { propertyValue } = this.props;

    return (
      <div className="grid grid-cols-6 gap-2 auto-cols-max">
        {Object.keys(options).map((optionKey) => (
          <TooltipComponent content={optionKey} key={optionKey}>
            <button
              className={`flex items-center justify-center w-8 h-8 bg-trueGray-100 ring-primary-500 cursor-pointer hover:bg-trueGray-50 ${
                propertyValue === options[optionKey] ? "ring-1" : ""
              }`}
              onClick={() => {
                this.updateProperty(
                  this.props.propertyName,
                  options[optionKey],
                );
              }}
            >
              <div
                className={`${tw`rounded-tl-[${options[optionKey]}]`} w-4 h-4 border-t-2 border-l-2 rounded- border-gray-600`}
              />
            </button>
          </TooltipComponent>
        ))}
      </div>
    );
  }
}

export default BorderRadiusOptionsControl;
