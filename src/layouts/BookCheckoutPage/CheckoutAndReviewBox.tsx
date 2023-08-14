import { Link } from "react-router-dom";
import BookModel from "../../models/BookModel";
import { LeaveAReview } from "../Utils/LeaveAReview";

export const CheckoutAndReviewBox: React.FC<{ book: BookModel | undefined, mobile: boolean, currentLoanCount: number, isAuthenticated: any
    isCheckedOut: Boolean, checkoutBook: any, isReviewLeft: boolean, submitReview: any}> = (props) => {
        function buttonRenderer(){
            if(props.isAuthenticated){
                if(!props.isCheckedOut && props.currentLoanCount < 5){
                    return (<button className="btn btn-success btn-lg" onClick={()=>props.checkoutBook()}>Checkout</button>)
                }else if(props.isCheckedOut){
                    return (<p><b>Book checked out. Enjoy!</b></p>)
                }else if(!props.isCheckedOut){
                    return (<p className="text-danger">Too many books checked out.</p>)
                }
            }
            return (<Link to={'/login'} className="btn btn-success btn-lg">Sign in</Link>)
        }

    function reviewRender() {
        if(props.isAuthenticated){
            if(!props.isReviewLeft){
                return (<LeaveAReview submitReview={props.submitReview}/>)
            }else{
                return (<p><b>Thank you for your review!</b></p>)
            }
        }
        return (<div><p>Sign in to be able to leave a review!</p><hr/></div>)
    }

    return (
        <div className={props.mobile? 'card d-flex mt-5': 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    <p>
                        <b>{props.currentLoanCount}/5 </b>
                        books checked out
                    </p>
                    <hr />
                    {props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0?
                        <h4 className="text-success"> Available </h4>
                        :
                        <h4 className="text-danger"> Wait list</h4>
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.book?.copies} </b>
                            copies
                        </p>
                        <p className="col-6 lead">
                            <b>{props.book?.copiesAvailable} </b>
                            available
                        </p>
                    </div>
                </div>
                {buttonRenderer()}
                <hr />
                <p className="mt-3">
                    This number can change until placing order has been complete.
                </p>
                {reviewRender()}
            </div>
        </div>
    );
}