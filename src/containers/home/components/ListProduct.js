import React from "react";
import { compose } from "recompose";
import { withEither, withMaybe } from "../../../app/hocs/renderingHandler";
import { IsLoading } from "../../../components/isLoading";
import { IsEmpty } from "../../../components/isEmpty";


const enhance = compose(
  withEither(
    props => props.isLoading,
    IsLoading
  ),
  withMaybe(
    props => !props.product
  ),
  withEither(
    props => !props.product.paragraphs.length,
    IsEmpty
  )
);

const ListProduct = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h4>{props.product.title}</h4>
      <ul>
        {
          props.product.paragraphs.map((x, i) =>
            <li key={i}>{x.text}</li>
          )
        }
      </ul>
    </div>
  )
};

export default enhance(ListProduct)
