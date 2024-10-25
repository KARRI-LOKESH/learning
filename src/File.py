import fitz  # PyMuPDF

# Path to the original PDF file
pdf_path = r'C:\Users\Admin\Desktop\KANAKA.pdf'
# Path for the output PDF
output_pdf_path = r'C:\Users\Admin\Desktop\output.pdf'

# Open the original PDF
try:
    original_pdf = fitz.open(pdf_path)
    # Create a new PDF to copy into
    new_pdf = fitz.open()

    # Iterate through the original PDF and copy pages
    for page in original_pdf:
        new_page = new_pdf.new_page()  # Create a new page
        new_page.show_pdf_page(new_page.rect, original_pdf, page.number)

    # Save the new PDF
    new_pdf.save(output_pdf_path)
    new_pdf.close()
    original_pdf.close()
    print(f"PDF copied successfully to: {output_pdf_path}")
except Exception as e:
    print(f"Error: {e}")
