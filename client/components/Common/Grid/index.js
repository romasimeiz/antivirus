import Grid from './Grid';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Row from './Row';
import CellHeader from './CellHeader';
import CellBody from './CellBody';

export { Grid };
export { Header };
export { Body };
export { Row };
export { CellBody };
export { CellHeader };

export default Object.assign(Grid, {
  Header, Footer, Body, Row, CellHeader, CellBody
});
