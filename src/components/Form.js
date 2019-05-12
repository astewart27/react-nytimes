import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getTopStories}>
            <select name="category" ref={props.setRef} className="category">
                <option value="">Select Category</option>
                <option value="arts">Arts</option>
                <option value="automobiles">Automobiles</option>
                <option value="books">Books</option>
                <option value="business">Business</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="health">Health</option>
                <option value="home">Home</option>
                <option value="insider">Insider</option>
                <option value="magazine">Magazine</option>
                <option value="movies">Movies</option>
                <option value="national">National</option>
                <option value="nyregion">NYRegion</option>
                <option value="obituaries">Obituaries</option>
                <option value="opinion">Opinion</option>
                <option value="politics">Politics</option>
                <option value="realestate">Realestate</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="sundayreviews">Sundayreview</option>
                <option value="technology">Technology</option>
                <option value="theater">Theater</option>
                <option value="tmagazine">TMagazine</option>
                <option value="travel">Travel</option>
                <option value="upshot">Upshot</option>
                <option value="world">World</option>
            </select>
            <button className="form-button">Submit</button>
        </form>
    </div>
);

export default Form;