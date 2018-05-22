import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/startup/client';
import '/imports/startup/both';

import '/imports/ui/stylesheets/pizza.min.css';

console.log("Author: Nikita Tolpekin");

BlazeLayout.setRoot('body');
