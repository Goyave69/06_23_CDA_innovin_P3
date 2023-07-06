export default function getCookie(key) {
  const b = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
  return b ? decodeURIComponent(b.pop()) : "";
}

// L'utilisation de pop() permet d'extraire la valeur du cookie du tableau, tout en la supprimant du tableau original.
