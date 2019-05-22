import * as Yup from 'yup';
import { locations, categories } from '../data.json';

const validationSchema = Yup.object().shape({
  name: Yup.string(
    'Enter a valid name, no special characters allowed'
  ).required(),
  email: Yup.string('Enter your email').email(
    'You need to enter a valid email address'
  ),
  phone: Yup.string().required(),
  location: Yup.string().required(),

  title: Yup.string('Enter a valid title').required(),
  details: Yup.string('Enter valid details').required(),
  imageCap: Yup.string('Enter a valid image caption').required(),
  imgLink: Yup.string()
    .url('Please upload an image')
    .required(),
  wlmConnection: Yup.string(
    "Enter a valid description about your connection to Women's Liberation Movement"
  ).required(),
  tags: Yup.array().min(1, 'Please select at least one tag'),

  category: Yup.string().required('Please select a location'),
  infoTrue: Yup.bool(
    true,
    'You need to certify that your information is true'
  ).required(),
  imgPermission: Yup.boolean().oneOf(
    [true],
    'You need to confirm that you can post this image publicly'
  ),
  selectedDate: Yup.date()
    .min('January 1960')
    .max('December 1990')
    .required(),
});

const validateFunc = (
  tags,
  category,
  infoTrue,
  name,
  email,
  phone,
  location,
  selectedDate,
  title,
  details,
  imageCap,
  imgPermission,
  imgLink,
  wlmConnection,
  additionalComments
) => {
  return validationSchema.validate(
    {
      tags,
      category,
      infoTrue,
      name,
      email,
      phone,
      location,
      selectedDate,
      title,
      details,
      imageCap,
      imgPermission,
      imgLink,
      wlmConnection,
      additionalComments,
    },
    { abortEarly: false }
  );
};

export default validateFunc;

// tags,
// category,
// infoTrue,
// name,
// email,
// phone,
// location,
// selectedDate,
// title,
// details,
// imageCap,
// imgPermission,
// imgLink,
// wlmConnection,
// additionalComments,

//  email: Yup.string('Enter your email')
//     .email('You need to enter a valid email address')
//     .required('Email is required'),
//   phone: Yup.string().required('Phone number is required'),
//   location: Yup.required('Please select a location').oneOf([locations]),
//   title: Yup.string('Enter a valid title').required(
//     'Please enter a suitable title'
//   ),
// details: Yup.string('Enter a valid details').required(
//   'Please enter a suitable details'
// ),
// imageCap: Yup.string('Enter a valid image caption').required(
//   'Please enter a suitable image caption'
// ),
// imgLink: Yup.string().url('Please upload an image'),
// wlmConnection: Yup.string(
//   "Enter a valid description about your connection to Women's Liberation Movement"
// ).required(
//   "Please tell us about your connection to Women's Liberation Movement"
// ),
// tags: Yup.array()
//   .min(1, 'Please select at least one tag')
//   .required('Please select the appropriate tags'),
// category: Yup.string().required('Please select a location').oneOf([categories]),
// infoTrue: Yup.boolean(),
// imgPermission: Yup.boolean(),
//   additionalComments: Yup.string('Enter valid input'),
// selectedDate: Yup.string().date()
//   .min('January 1960')
//   .max('December 1990'),
