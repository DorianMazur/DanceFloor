import React, { ReactElement } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export interface ILoadableContentProps {
  loading: boolean;
}
const LoadableContent: React.FC<ILoadableContentProps> = ({
  loading,
  children,
}) => {
  if (loading) {
    return <Loader type="Puff" color="red" height={100} width={100} />;
  }
  return children as ReactElement<unknown>;
};

export default LoadableContent;
