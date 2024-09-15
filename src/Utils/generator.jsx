
export const linkGenerator = (phoneNumber) => {
    const link = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // with text
    // const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

    return link;
}