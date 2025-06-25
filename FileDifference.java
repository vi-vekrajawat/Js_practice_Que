import java.io.*;
import java.util.*;

public class FileDifference {
    public static void main(String[] args) {
        // File paths
        String file1Path = "QP2.html";
        String file2Path = "QP1.html";
        String outputPath = "difference.txt";

        try {
            // Read first file
            Set<String> file1Lines = new HashSet<>(readFile(file1Path));

            // Read second file
            Set<String> file2Lines = new HashSet<>(readFile(file2Path));

            // Find differences
            Set<String> differences = new HashSet<>(file1Lines);
            differences.addAll(file2Lines);

            Set<String> common = new HashSet<>(file1Lines);
            common.retainAll(file2Lines);

            differences.removeAll(common);

            // Write differences to output file
            writeFile(outputPath, differences);

            System.out.println("Differences written to " + outputPath);

        } catch (IOException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }

    private static List<String> readFile(String path) throws IOException {
        List<String> lines = new ArrayList<>();
        BufferedReader reader = new BufferedReader(new FileReader(path));
        String line;

        while ((line = reader.readLine()) != null) {
            lines.add(line.trim());
        }

        reader.close();
        return lines;
    }

    private static void writeFile(String path, Set<String> lines) throws IOException {
        BufferedWriter writer = new BufferedWriter(new FileWriter(path));

        for (String line : lines) {
            writer.write(line);
            writer.newLine();
        }

        writer.close();
    }
}
