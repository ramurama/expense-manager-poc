import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { FC } from 'react'
import { Button } from 'react-native'

type PDFGeneratorProps = {
  content: string
}

export const PDFGenerator: FC<PDFGeneratorProps> = ({ content }) => {
  const html = `<html>
        <body>
            <b>${content}</b>
        </body>
    </htm>`

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await printToFileAsync({ html, base64: false })
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' })
  }

  return (
    <>
      <Button title="Generate PDF" onPress={printToFile} />
    </>
  )
}
