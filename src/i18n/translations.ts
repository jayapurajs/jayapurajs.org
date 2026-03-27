export type Lang = 'id' | 'en';

export const ui = {
  id: {
    // Navigation
    nav_home: 'Beranda',
    nav_events: 'Event',
    nav_about: 'Tentang',
    nav_coc: 'Kode Etik',
    nav_lang_label: 'Bahasa:',

    // Events list page
    events_badge: 'Pembaruan Komunitas',
    events_heading_pre: 'Event',
    events_heading_highlight: 'Mendatang',
    events_subtitle: 'Bergabunglah dalam meetup, workshop, dan sesi berbagi kami.',
    events_status_open: 'Pendaftaran Dibuka',
    events_status_closed: 'Pendaftaran Ditutup',
    events_status_completed: 'Selesai',
    events_badge_ended: 'Event Berakhir',
    events_badge_open: 'Terbuka',
    events_cta_recap: 'Lihat rekap',
    events_cta_register: 'Daftar sekarang',
    events_cta_details: 'Lihat detail',
    events_attended: 'hadir',
    events_attending: 'akan hadir',
    events_empty_title: 'Belum ada event',
    events_empty_desc: 'Pantau terus untuk event-event yang akan datang.',

    // Event detail page
    event_back: 'Kembali ke Event',
    event_completed: 'Selesai',
    event_open_reg: 'Pendaftaran Dibuka',
    event_closed_reg: 'Pendaftaran Ditutup',
    event_venue: 'Lokasi',
    event_register: 'Daftar Sekarang',
    event_ended: 'Event telah berakhir',
    event_reg_closed: 'Pendaftaran Ditutup',
    event_meal_title: 'Makan gratis termasuk',
    event_meal_desc: 'Peserta yang terdaftar akan mendapatkan kotak makan gratis di event.',
    event_attended: 'hadir',
    event_attending: 'akan hadir',
    event_speakers: 'Pembicara',
    event_view_slides: 'Lihat Slide',
    event_timeline: 'Jadwal Event',
    event_timezone: 'WIT (Waktu Indonesia Timur)',
    event_resources: 'Sumber Daya Event',
    event_gallery: 'Galeri Foto',
    event_gallery_photos: 'foto',
    event_gallery_hint: 'Klik untuk lihat ukuran penuh',
    event_gallery_navigate: '← → navigasi',
    event_gallery_close: 'Esc untuk tutup',
    event_recap: 'Rekap Event',
    event_recap_thanks: 'Event ini telah berakhir. Terima kasih kepada semua yang berpartisipasi!',
    event_recap_article: 'Baca artikel rekap',
    event_recap_photos: 'Lihat semua foto',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_events: 'Events',
    nav_about: 'About',
    nav_coc: 'Code of Conduct',
    nav_lang_label: 'Language:',

    // Events list page
    events_badge: 'Community Updates',
    events_heading_pre: 'Upcoming',
    events_heading_highlight: 'Events',
    events_subtitle: 'Join us for meetups, workshops, and sharing sessions.',
    events_status_open: 'Registration Open',
    events_status_closed: 'Registration Closed',
    events_status_completed: 'Completed',
    events_badge_ended: 'Event Ended',
    events_badge_open: 'Open',
    events_cta_recap: 'View recap',
    events_cta_register: 'Register now',
    events_cta_details: 'View details',
    events_attended: 'attended',
    events_attending: 'attending',
    events_empty_title: 'No events yet',
    events_empty_desc: 'Check back soon for upcoming events.',

    // Event detail page
    event_back: 'Back to Events',
    event_completed: 'Completed',
    event_open_reg: 'Open Registration',
    event_closed_reg: 'Registration Closed',
    event_venue: 'Venue',
    event_register: 'Register Now',
    event_ended: 'Event has ended',
    event_reg_closed: 'Registration Closed',
    event_meal_title: 'Free meal included',
    event_meal_desc: 'Registered attendees will receive a complimentary meal box at the event.',
    event_attended: 'attended',
    event_attending: 'attending',
    event_speakers: 'Speakers',
    event_view_slides: 'View Slides',
    event_timeline: 'Event Timeline',
    event_timezone: 'WIT (East Indonesia Time)',
    event_resources: 'Event Resources',
    event_gallery: 'Photo Gallery',
    event_gallery_photos: 'photos',
    event_gallery_hint: 'Click to view full size',
    event_gallery_navigate: '← → navigate',
    event_gallery_close: 'Esc to close',
    event_recap: 'Event Recap',
    event_recap_thanks: 'This event has ended. Thank you to everyone who participated!',
    event_recap_article: 'Read recap article',
    event_recap_photos: 'View all photos',
  },
} as const;

export type UIKey = keyof typeof ui.en;

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}
