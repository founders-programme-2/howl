import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Hi, what's your name?")
    .matches(
      /^[a-z ]*$/i,
      'Please enter a valid name that contains no numbers or special characters.'
    ),
  email: Yup.string()
    .required("What's your email address?")
    .email('You need to enter a valid email address.'),
  phone: Yup.string().matches(
    /^[\d+ ]*$/,
    'Please enter a valid phone number that contains no letters or special characters.'
  ),
  location: Yup.string().required('Where did this event occur?'),
  year: Yup.string().required(
    'Approximately when did this event occur? If the event spans multiple years, select the year when it started.'
  ),

  title: Yup.string()
    .required('What title would suit your story? (under 10 words).')
    .matches(
      /^[a-z0-9 ]*$/i,
      'Please enter a valid title. No special characters allowed.'
    ),
  details: Yup.string().when('radio', {
    is: radio => radio === 'textPost' || radio === 'both',
    then: Yup.string()
      .required('Describe what happened in no more than 1000 words.')
      .matches(
        /^[a-z0-9 ]*/i,
        'Please enter valid descriptive details. No special characters allowed.'
      ),
  }),
  imageCap: Yup.string().when('radio', {
    is: radio => radio === 'imagePost' || radio === 'both',
    then: Yup.string()
      .required('How would you caption this image?')
      .matches(
        /^[a-z0-9 ]*$/i,
        'Please enter a valid image caption. No special characters allowed.'
      ),
  }),
  imgLink: Yup.string().when('radio', {
    is: radio => radio === 'imagePost' || radio === 'both',
    then: Yup.string()
      .required('Please upload your image:')
      .url(),
  }),
  wlmConnection: Yup.string()
    .required("What's your connection to the Women's Liberation Movement?")
    .matches(
      /^[a-z0-9 ]*$/i,
      "Please enter a valid description of your connection to Women's Liberation Movement. No special characters allowed."
    ),
  tags: Yup.array().required('What tags would best describe your story?'),

  category: Yup.string().required(
    'What category would best describe your story?'
  ),
  infoTrue: Yup.bool()
    .test(
      'infoTrue',
      'You must certify that the information you entered is correct and contains no personal attacks.',
      value => value === true
    )
    .required(
      'You must certify that the information you entered is correct and contains no personal attacks.'
    ),
  imgPermission: Yup.bool().when('radio', {
    is: radio => radio === 'imagePost' || radio === 'both',
    then: Yup.bool()
      .test(
        'imgPermission',
        'You must confirm that you have the rights to post this image publicly.',
        value => value === true
      )
      .required(
        'You must confirm that you have the rights to post this image publicly.'
      ),
  }),

  additionalComments: Yup.string().matches(
    /^[a-zA-Z0-9 ]*$/,
    'Please enter valid comments. No special characters allowed.'
  ),
});

const validateFunc = ({
  tags,
  category,
  infoTrue,
  name,
  email,
  phone,
  location,
  year,
  title,
  details,
  imageCap,
  imgPermission,
  imgLink,
  wlmConnection,
  additionalComments,
  radio,
}) => {
  return validationSchema.validate(
    {
      tags,
      category,
      infoTrue,
      name,
      email,
      phone,
      location,
      year,
      title,
      details,
      imageCap,
      imgPermission,
      imgLink,
      wlmConnection,
      additionalComments,
      radio,
    },
    { abortEarly: false }
  );
};

export default validateFunc;
