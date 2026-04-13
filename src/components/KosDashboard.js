import { ref } from 'vue'
import roomImage from '../assets/room.jpg'
import roomBathroomImage from '../assets/roombathroom.jpg'

export default {
  setup() {
    const selectedRoom = ref(null)
    const showPopup = ref(false)
    const rooms = ref([
      { id: 1, name: 'Kamar standard', price: 'Rp 450.000', capacity: 1, image: roomImage },
      { id: 2, name: 'Kamar + Kamar mandi', price: 'Rp 600.000', capacity: 1, image: roomBathroomImage },
      { id: 3, name: 'Kamar Kompak', price: 'Rp 350.000', capacity: 1, image: roomImage }
    ])

    const bookingForm = ref({
      name: '',
      phone: '',
      roomId: '',
      checkIn: '',
      checkOut: ''
    })

    const submitBooking = () => {
      console.log('Booking submitted:', bookingForm.value)
      alert('Terima kasih telah memesan!')
    }

    return {
      selectedRoom,
      showPopup,
      rooms,
      bookingForm,
      submitBooking
    }
  }
}
