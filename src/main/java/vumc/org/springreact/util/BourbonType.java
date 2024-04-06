package vumc.org.springreact.util;

public enum BourbonType {
    SINGLE_BARREL("Single Barrel"),
    CASK_STRENGTH("Cask Strength"),
    WHEATED("Wheated"),
    HIGH_RYE("High Rye"),
    HIGH_CORN("High Corn"),
    SMALL_BATCH("Small Batch");

    private String label;

    BourbonType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
