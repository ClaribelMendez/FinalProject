import { Popover } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";


const Overlay = (props) => {
 
  let analysis = props.analysis
  const popoverRight = (
    <Popover id="popover-positioned-right" title="Popover right">
      {props.analysis}
    </Popover>
  );
  return (
    <div className='popover'>
  <ButtonToolbar>
    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
      <CaretRightFill />
    </OverlayTrigger>
  </ButtonToolbar>
</div>
)
}

export default Overlay
