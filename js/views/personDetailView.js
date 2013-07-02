Thorax.View.extend({
  name: "personDetailView",
  events: {
    "submit form.personEditForm": function(e){
      e.preventDefault();
      this.serialize(function(attrs){
        this.model.save(attrs);
        this.$('.personEditForm').hide();
      }, {set: false});

    },
    "invalid": function(errors){
      console.log('invalid form input' + errors);
    },
  },
  initialize: function(){
  },
  editPerson: function(){
    this.$('.personEditForm').show();
    this.populate(); // rather than doing populate here, which we are just showing you... normally you would want to do this in a ready event to avoid any flicker
  },
  cancelEdit: function(){
    this.$('.personEditForm').hide();
    this.populate(); 
  }
})