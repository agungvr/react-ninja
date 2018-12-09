import { compose } from 'recompose';
import { withMaybe, withEither } from "../../app/hocs/renderingHandler";

import { IsEmpty } from '../../components/IsEmpty';
import { IsLoading } from '../../components/IsLoading';
import { ListProduct } from './components/ListProduct';

const isLoadingCondition = props => props.isLoading;
const nullCondition = props => !props.product;
const isEmptyCondition = props => !props.product.paragraphs.length;

const enhance = compose(
  withEither(isLoadingCondition, IsLoading),
  withMaybe(nullCondition),
  withEither(isEmptyCondition, IsEmpty)
);

export const Container = enhance(ListProduct);
