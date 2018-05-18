import './pizza_view.html';

Template.pizza_view.onCreated(function pizzaOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(1);
});

Template.pizza_view.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.pizza_view.events({
    'click #increment'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },

    'click #decrement'(event, instance) {
        // increment the counter when button is clicked
        if(instance.counter.get() <= 1) {

        }
        else {
            instance.counter.set(instance.counter.get() - 1);
        }
    }
});
