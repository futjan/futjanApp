import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imageSkeleton from "../image/catalog/demo/product/travel/10-80x80.jpg";
import {
  getSurplusesPrivate,
  deleteSurplus,
  surplusActivate,
} from "../actions/surplusAction";
import Loader from "../../utils/Loader";
const Surplus = (props) => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  // useEffect
  useEffect(() => {
    dispatch(getSurplusesPrivate());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div id="content" className="col-sm-12">
          <h1>Surplus ({surplusFromStore.totalDocs})</h1>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td className="text-center">Image</td>
                  <td className="text-left">Surplus info</td>
                  <td className="text-center">Original Price</td>
                  <td className="text-center">Offered Price</td>
                  {/* <td className="text-left">Model</td> */}
                  <td className="text-center">Action</td>
                </tr>
              </thead>
              <tbody>
                {surplusFromStore.privateSurpluses.length > 0 ? (
                  surplusFromStore.privateSurpluses.map((surplus) => (
                    <tr key={surplus._id}>
                      <td className="text-center">
                        {" "}
                        <Link to={`/surplus-detail/${surplus._id}`}>
                          <img
                            src={imageSkeleton}
                            alt="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                            title="Bougainvilleas on Lombard Street,  San Francisco, Tokyo"
                            className="img-thumbnail"
                          />
                        </Link>{" "}
                      </td>
                      <td className="text-left">
                        <Link to={`/surplus-detail/${surplus._id}`}>
                          {surplus.name.length > 40
                            ? surplus.name.substring(0, 50) + "..."
                            : surplus.name}
                        </Link>{" "}
                        <br />
                        <small>Categor: {surplus.category}</small> <br />
                        <small>
                          Business Type: {surplus.businessType}
                        </small>{" "}
                      </td>
                      <td className="text-center">$ {surplus.originalPrice}</td>
                      <td className="text-center">$ {surplus.offeredPrice}</td>
                      {/* <td className="text-left">Product 8</td> */}
                      <td className="text-center">
                        <div className="input-group btn-block">
                          {surplus.active === true ? (
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() =>
                                dispatch(
                                  surplusActivate({
                                    id: surplus._id,
                                    active: false,
                                  })
                                )
                              }
                            >
                              DEACTIVE
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() =>
                                dispatch(
                                  surplusActivate({
                                    id: surplus._id,
                                    active: true,
                                  })
                                )
                              }
                            >
                              ACTIVE
                            </button>
                          )}

                          <button
                            type="button"
                            style={{ margin: "0 8px" }}
                            className="btn btn-primary"
                            onClick={() => {
                              props.setTab("EDIT");
                              props.setId(surplus._id);
                            }}
                          >
                            EDIT
                          </button>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => dispatch(deleteSurplus(surplus._id))}
                          >
                            DELETE
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <p style={{ padding: "15px" }}>No result</p>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {surplusFromStore.loading === true ? <Loader /> : null}
    </div>
  );
};

export default Surplus;
