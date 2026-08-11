<template>
  <div id="googleButton"></div>
</template>

<script setup>

const userStore = useUserStore()

const emit = defineEmits([
  'success',
  'error'
])


onMounted(() => {

  google.accounts.id.initialize({

    client_id:
      '231309768199-3ujobnv26sn1uvbcs4gq271mblosrr1q.apps.googleusercontent.com',

    callback: async (response) => {

      try {

        await userStore.googleLogin(
          response.credential
        )

        emit('success')

      }
      catch(error){

        emit('error', error)

      }

    }

  })


  google.accounts.id.renderButton(

    document.getElementById('googleButton'),

    {
      theme: 'outline',
      size: 'large',
      width: 300
    }

  )

})

</script>
