<template>
  <div v-if="contactedMessages.length > 0">
      <h2>Contacted Messages</h2>
            <div class="container-fluid">
              <div class="row pb-2">
                <div class="col-12 bg-grey mb-2 p-3" v-for="(contactedMessage, index) in contactedMessages" :key="index">
                  <p><strong>Name</strong> : {{contactedMessage.name}}</p>
                  <p><strong>Email</strong> : {{contactedMessage.email}}</p>
                  <p><strong>Subject</strong> : {{contactedMessage.subject}}</p>
                  <p><strong>Message</strong> : {{contactedMessage.message}}</p>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
export default {
    name: "ContactedMessageList",
    props: {
      contactedMessages : {
        type : Array,
        required : true
      }
    }
}
</script>

<style>

</style>