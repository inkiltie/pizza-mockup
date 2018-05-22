import './pizza_view.html';

Template.pizza_view.onCreated(function pizzaOnCreated() {
    this.counter = new ReactiveVar(1);
});

Template.pizza_view.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.pizza_view.events({
    'click #increment'(event, instance) {
        instance.counter.set(instance.counter.get() + 1);
    },

    'click #decrement'(event, instance) {
        if(instance.counter.get() <= 1) { }
        else {
            instance.counter.set(instance.counter.get() - 1);
        }
    }
});
