package model;

public enum TariffType {

	singleCheck("Разовый просмотр авто"), forADay("Эксперт на день"), fullConstruction("Авто под ключ");
	
	private String name;

	private TariffType(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
