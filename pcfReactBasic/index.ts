import { IInputs, IOutputs } from "./generated/ManifestTypes";
import HelloComponent from "./components/hello";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ControlContextService, StandardControlReact } from "pcf-react";
export class pcfReactBasic extends StandardControlReact<IInputs, IOutputs> {
  constructor() {
    super();
    this.renderOnParametersChanged = false;
    /*
    this.initServiceProvider = (serviceProvider): void => {
      serviceProvider.register(
        "HelloComponent",
        new HelloComponent(serviceProvider.get(ControlContextService.serviceProviderName)),
      );
    };*/
    /*
    this.initServiceProvider = serviceProvider => {
      serviceProvider.register("HelloComponent", new <HelloComponent>(serviceProvider));
    };*/
    this.reactCreateElement = (container, width, height, serviceProvider): void => {
      ReactDOM.render(React.createElement(HelloComponent, { serviceProvider: serviceProvider }), container);
    };
    /*
    this.reactCreateElement = (container, width, height, serviceProvider) : void => {
      ReactDOM.render(
        React.createElement(<helloComponent>, {
          serviceProvider: serviceProvider,
          controlWidth: width,
          controlHeight: height,
        }),
        container
      );
    };
    */
  }
}

