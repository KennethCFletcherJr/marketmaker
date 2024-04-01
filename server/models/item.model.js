//This line imports what you need from Mongoose
import { model, Schema } from "mongoose";
/* const ItemSchema = new Schema({}, {})copy
This creates a Schema, the actual blueprint of your model. Schemas often take two objects, one to define the data and the other for options, such as "," { timestamps: true }. */
const ItemSchema = new Schema(
  /* This defines a single column of your Property collection. We're saying every Property  has a streetNumber, and every streetNumber is a type number that's optional.

"required" is a validation rule that must be true to save a number, and the final string is an error message thrown if we fail it. We also have two more rules, one for the minlength, one for the maxlength, all using the same format. */
  {
    itemName: {
        type: String,
        minlength: [1, "Item must be at least one character or digit!"],
        maxlength: [20, "item must be no more than 20 characters long!"],
      },

      specs: {
        type: String,
        required: [true, "Specs are required!"],
        minlength: [2, "Specs must be at least two characters long! Enter 'NA' for none."],
        maxlength: [20, "Specs must be no more that 20 characters long!"],
      },

      orderPrice: {
        type: Number,
        required: [true, "Order price is required!"],
        minlength: [1, "Order price must be at least one character long! (If unknown, enter '0')"],
        maxlength: [20, "Order price must be no more that 20 characters long!"],
      },
   
    itemCount: {
        type: Number,
        required: [true, "Item count per order is required! (If unknown, enter 'UNK')"],
        minlength: [1, "Item Count must be at least three characters!"],
        maxlength: [20, "Item Count must be no more that 20 characters long!"],
    },

},

  { timestamps: true }
  //The options object, in this case, tells every Property to save timestamps.

);

//The final function saves your Book Schema and exports it at the bottom.
const Item = model("Item", ItemSchema);
export default Item;
