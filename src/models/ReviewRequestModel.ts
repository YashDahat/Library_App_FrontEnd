class ReviewRequestModel{
    rating: number;
    bookId: number;
    reviewDescription? : string;
    constructor(rating: number, bookId: number, reviewDescription: string){
        this.rating = rating;
        this.bookId = bookId;
        if(reviewDescription != null){
            this.reviewDescription = reviewDescription;
        }
    }
}

export default ReviewRequestModel;