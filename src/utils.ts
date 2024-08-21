export function formatDate (oldDate: string): string {
    let date = new Date(oldDate);
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}
// 
export function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  };
