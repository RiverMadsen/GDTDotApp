function Footer(props) {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="prevNavigation col-4 text-left">{props.prevNav}</div>
          <div className="currentPage col-4 text-center font-weight-bold">{props.currentNav}</div>
          <div className="nextNavigation col-4 text-right ">{props.nextNav}</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
