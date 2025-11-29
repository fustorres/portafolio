import html2pdf from 'html2pdf.js';

export function pdf_viewer_wrapper(sectionElement){
    const element = document.getElementById(sectionElement)

    html2pdf().from(element).save()
}