import { type Form } from "./form.type.js";
import { type FormCar } from "./form-car.type.js";
import { type FormCarAddons } from "./form-car-addons.type.js";
import { type FormDate } from "./form-date.type.js";
import { type FormPrice } from "./form-price.type.js";

type FormRequestDto = FormDate & FormCar & FormCarAddons & Form & FormPrice;

export { type FormRequestDto };
